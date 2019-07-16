
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AdminService } from './admin.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    let adminService = this.injector.get(AdminService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${adminService.getToken()}`
      }
      // headers: req.headers.set('Authorization', 'bearer ' + adminService.getToken())
    })
    return next.handle(tokenizedReq)
  }

}

// constructor(private injector: Injector){}
// intercept(req, next) {
//   let adminService = this.injector.get(AdminService)
//   let tokenizedReq = req.clone(
//     {
//       headers: req.headers.set('Authorization', 'bearer ' + adminService.getToken())
//     }
//   )
//   return next.handle(tokenizedReq)
// }

// }