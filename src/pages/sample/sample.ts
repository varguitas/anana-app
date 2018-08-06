import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { ResultPage } from '../result/result';
/**
 * Generated class for the SamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html',
})
export class SamplePage {
  image: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera:Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamplePage');
  }
  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options).then(imageData =>{
      this.navCtrl.push("ResultPage",{
        result:imageData
      });
      this.image = `data:image/jpg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error(error);
    });
  }
  moveToResut(){

  }
}
