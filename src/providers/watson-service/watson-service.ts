import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';
/*
  Generated class for the WatsonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WatsonServiceProvider {

  constructor(private http: HttpClient, private platform: Platform) {
    console.log('Hello WatsonServiceProvider Provider');
  }
  private apiUrl = 'https://gateway.watsonplatform.net/visual-recognition/api/v3/classify?version=2018-03-19';

  postPicture(img:any, reqOpts?: any){

      reqOpts = {
        params: new HttpParams(),
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer eyJraWQiOiIyMDE3MTAzMC0wMDowMDowMCIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLWMzOGY2NjgzLTZmMzktNDI3NS1hMzExLThmZTAzZDQ4YmNlNSIsImlkIjoiaWFtLVNlcnZpY2VJZC1jMzhmNjY4My02ZjM5LTQyNzUtYTMxMS04ZmUwM2Q0OGJjZTUiLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC1jMzhmNjY4My02ZjM5LTQyNzUtYTMxMS04ZmUwM2Q0OGJjZTUiLCJzdWIiOiJTZXJ2aWNlSWQtYzM4ZjY2ODMtNmYzOS00Mjc1LWEzMTEtOGZlMDNkNDhiY2U1Iiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJ1bmlxdWVfaW5zdGFuY2VfY3JucyI6WyJjcm46djE6Ymx1ZW1peDpwdWJsaWM6d2F0c29uLXZpc2lvbi1jb21iaW5lZDp1cy1zb3V0aDphLzk5N2Y4MTRhZmE4NTQyOTk5ZDBjMTUzN2MyMTMxMTgzOjBlNjZlZTQ0LTE1YmEtNDk3Ny05N2M0LTIyY2E2MmYxYmRkNjo6Il0sImFjY291bnQiOnsiYnNzIjoiOTk3ZjgxNGFmYTg1NDI5OTlkMGMxNTM3YzIxMzExODMifSwiaWF0IjoxNTMzNTgyMDA5LCJleHAiOjE1MzM1ODU2MDksImlzcyI6Imh0dHBzOi8vaWFtLmJsdWVtaXgubmV0L2lkZW50aXR5IiwiZ3JhbnRfdHlwZSI6InVybjppYm06cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6YXBpa2V5Iiwic2NvcGUiOiJpYm0gb3BlbmlkIiwiY2xpZW50X2lkIjoiZGVmYXVsdCIsImFjciI6MSwiYW1yIjpbInB3ZCJdfQ.RHH1RsCtK2Um66QjUrmmPw5EvCq5KP_LSidLtIUP4foFs9Kkql3UPGeP6Zm80JdOBJUFIgPeM5-AhtBUooUTGY1SLHiwDXe1-13FxTgdtZBEJnx8sIi4NE4aBi9WlUX6jJesIF2QsdPf14rACppAec8Lfx3e2OYbqVRt_zDI3uKszJ79P-gPgA6toYnPQJsHmFaryZY2TtACFSK_dWgdOUm19lmvWPAaAXZxIT5LIapJjfSir3Njv6feXzWqWJ7MJY8RO64-0kM9iaHHNOjlbOagBz1fKIwleSv0eZV570bpnO8VLcMx6eke1gTgPB_EjYMrwTa0H9MA7L5OZv3Cqw'
        }
      };
      reqOpts.params.set("classifier_ids","pina_82502275");
      reqOpts.params.set("images_file",img);
      return this.http.post(this.apiUrl, img, reqOpts);

  }

}
