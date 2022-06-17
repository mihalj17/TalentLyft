import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

    transform(listUsers:Tutorial[], filterText:string) {
       if(listUsers.length===0 || filterText===''){
           return listUsers;

       } else {
           return listUsers.filter((listUsers) =>{
               return listUsers.title?.toLowerCase()===filterText.toLowerCase()
           })
       }
   

}

}

/**
  transform(listUsers:Tutorial[], filteredString:string): Tutorial[] {
        if(!listUsers || !filteredString ){
            return listUsers;
        }
        return listUsers.filter(data =>
            data.title?.toLocaleLowerCase().includes(filteredString.toLocaleLowerCase()));
   

}
 */