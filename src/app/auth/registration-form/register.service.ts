import { Injectable } from '@angular/core';
import { Register } from './register'

@Injectable()
export class RegisterService {

  checkPassword(model): Boolean {
    if (model.password != model.password_con) {
      return false
    }
    return true
  }

  verifyAge(model): Boolean {
    var dobData = model.dob.split('/');
    var dateUnparsed = new Date(Date.now())
    var yearDifference = dateUnparsed.getFullYear() - parseInt(dobData[2])

    if (yearDifference == 18) {
      if (dateUnparsed.getMonth() - parseInt(dobData[0]) < 0) {
        return false
      } else {
        if (dateUnparsed.getDate() - parseInt(dobData[1]) < 0) {
          return false
        }
      }
    } else if (yearDifference < 18) {
      return false
    }

    return true
  }

}
