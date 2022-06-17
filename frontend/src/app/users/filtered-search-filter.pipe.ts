import { Pipe, PipeTransform } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';

@Pipe({
  name: 'filteredSearchFilter'
})
export class FilteredSearchFilterPipe implements PipeTransform {

    transform(publishUsers:Tutorial[], publishedFilterText:string) {
        if(publishUsers.length===0 || publishedFilterText===''){
            return publishUsers;
 
        } else {
            return publishUsers.filter((publishUsers) =>{
                return publishUsers.title?.toLowerCase()===publishedFilterText.toLowerCase()
            })
        }
    
 
 }

}
