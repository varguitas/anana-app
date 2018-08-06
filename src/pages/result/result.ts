import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Loading} from 'ionic-angular';
import { WatsonServiceProvider } from '../../providers/watson-service/watson-service';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  private result: number = 0;
  public positive: boolean = false;
  public score: number = 0;
  public message: string = "holi";
  public base64Image: string = null;
  public Image: string = null;
  public status: string = 'NA';

  constructor(private navCtrl: NavController, private navParams: NavParams, private watsonService: WatsonServiceProvider) {
    this.base64Image = navParams.get('result');
    this.Image = `data:image/jpg;base64,${this.base64Image}`;
    this.send();
    console.log(this.result);
  }
  back(){
    this.navCtrl.pop();
  }
  send(){
      this.watsonService.postPicture(this.Image).subscribe((res: any) => {
//        let response = JSON.parse(res.response);

        console.log("respuesta loading")
        console.log(res);
        this.message = res;
        //this.message = result;



      });
  }



}
