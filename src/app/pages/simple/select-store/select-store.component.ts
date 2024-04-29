import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'select-store',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select-store.component.html',
  styleUrl: './select-store.component.scss'
})
export class SelectStoreComponent implements OnInit{
  storeForm=this.formBuilder.group({
    store:['',Validators.required]
  })
  stores=[
    {store:'sumbawanga',id:"1"},
    {store:'namanyere',id:"2"},
    {store:'kirando',id:"3"},
  ]
selectStore(){
  if(this.storeForm.status=='INVALID') return
const outletName= this.storeForm.value.store?? ''
const outlet= this.stores.find(s=>s.store==outletName)
if(outlet){
  this.appService.appStore.update((store)=>{
    return {...store,outlet:outlet}
  })
  this.router.navigate(['/app/sales'])
}
}
constructor(private formBuilder:FormBuilder,private appService:AppService,private router:Router){

}
ngOnInit(): void {
    
}
}
