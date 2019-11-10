import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

import { environment } from '@environments/environment';

import * as fromModels from '@app/models';

import * as fromServicesShared from '@shared/services';

import * as fromServices from '@profile/services';
import * as fromStore from '@profile/store';

@Component({
  selector: 'PREFIX_APP-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [fromServices.ProfileService],
})
export class ProfileComponent implements OnInit {
  public isLoading$: Observable<boolean>;

  private user$: Observable<fromModels.User>;
  public user: fromModels.User;
  public avatarpath: string;

  public genders: Array<string>;
  public countries: Array<any>;
  public cities: Array<any>;

  public uploader: FileUploader;
  public uploaderOptions: FileUploaderOptions = {};
  public hasBaseDropZoneOver = false;
  public upFileProgressBarMode = 'determinate';
  public upFileProgressBarState = 'primary';

  public profileFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: fromServices.ProfileService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.ProfileState>
  ) {
    this.isLoading$ = this._store.pipe(select(fromStore.getLoading));

    this.genders = [
      'Hombre',
      'Mujer'
    ];

    this.getCountries();

    this.user = this._service.getUserLogged();
    this.avatarpath = this._service.getUserAvatar(this.user.image);

    this.profileFormGroup = this._formBuilder.group({
      _id: [this.user._id, ''],
      image: [this.user.image, ''],
      username: [this.user.username, ''],
      name: [this.user.name, ''],
      lastname: [this.user.lastname, ''],
      about: [this.user.about, ''],
      position: [this.user.position, ''],
      email: [this.user.email, ''],
      phone: [this.user.phone, ''],
      country: [this.user.country, ''],
      city: [this.user.city, ''],
      gender: [this.user.gender, ''],
      bornDate: [this.user.bornDate, ''],
    });

    this.uploader = new FileUploader({
      url: `${environment.apiUrl}user/upload-image/${this.user._id}`,
      authToken: this._service.getToken(),
      authTokenHeader: 'auth',
      disableMultipart: false
    });
    this.uploader.onAfterAddingFile = (file: any) => { file.withCredentials = false; };
    this.uploader.response.subscribe(resp => {
      const response = JSON.parse(resp);
      this.profileFormGroup.patchValue({ image: response.image });
      this.onUpdateProfile();
    });

    this.user$ = this._store.pipe(select(fromStore.getUser));
    this.user$.subscribe((user) => {
      this.user = this._service.getUserLogged();
      this.avatarpath = this._service.getUserAvatar(this.user.image);
    });
  }

  ngOnInit() { }

  getCountries() {
    this._utils.getCountries().subscribe(
      (response: any) => {
        this.countries = response.countries;
        this.cities = [];

        if (this.user.country !== '') {
          this.getCitiesByCountry(this.user.country);
        }
      }, error => {
        console.log(<any>error);
      }
    );
  }

  getCitiesByCountry(country) {
    country = typeof country === 'undefined' ? this.profileFormGroup.value.country : country;
    this._utils.getCitiesOfCountry(country).subscribe(
      (response: any) => {
        this.cities = response.cities;
      }, error => {
        console.log(<any>error);
      }
    );
  }

  fileDropped(event) {
    this.hasBaseDropZoneOver = event;
  }

  onUpdateProfile() {
    if (this.profileFormGroup.valid) {
      this._store.dispatch(new fromStore.UserUpdating(this.profileFormGroup.value));
    }
  }
}
