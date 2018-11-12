import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.page.html',
  styleUrls: ['./subpage.page.scss'],
})
export class SubpagePage implements OnInit {

  constructor(
    public modalController: ModalController,
    private camera: Camera,
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
    const sourceType: number = this.camera.PictureSourceType.PHOTOLIBRARY;
    // const sourceType: number = this.camera.PictureSourceType.CAMERA;

    const options: CameraOptions = {
      quality: 100,
      targetWidth: 200,
      targetHeight: 200,
      sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log('base64Image', base64Image);
    }, (err) => {
      // Handle error
      console.error('Error:', err);
    });
  }

}
