import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.page.html',
  styleUrls: ['./subpage.page.scss'],
})
export class SubpagePage implements OnInit {

  constructor(
    public modalController: ModalController,
    private camera: Camera,
    private crop: Crop,
    private platform: Platform,
  ) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  openCamera() {
    // Source type can be camera or photo library
    // const sourceType: number = this.camera.PictureSourceType.PHOTOLIBRARY;
    const sourceType: number = this.camera.PictureSourceType.CAMERA;

    const options: CameraOptions = {
      quality: 100,
      // targetWidth: 200,
      // targetHeight: 200,
      sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // allowEdit: true,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log('base64Image', base64Image);

      // Crop Image, on android this returns something like, '/storage/emulated/0/Android/...'
      // Only giving an android example as ionic-native camera has built in cropping ability
      if (this.platform.is('ios')) {
        return imageData
      } else if (this.platform.is('android')) {
        // Modify fileUri format, may not always be necessary
        imageData = 'file://' + imageData;

        /* Using cordova-plugin-crop starts here */
        return this.crop.crop(imageData, { quality: 100, targetWidth: -1, targetHeight: -1 });
      }
    }, (err) => {
      // Handle error
      console.error('Error:', err);
    });

  }

}
