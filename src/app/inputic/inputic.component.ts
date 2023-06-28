import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputic',
  templateUrl: './inputic.component.html',
  styleUrls: ['./inputic.component.css']
})
export class InputicComponent implements OnInit {
  value = "Raf";

  constructor() { }

  ngOnInit(): void {
  }

  clearMe(): void {
    console.log("User cleared value: "+this.value)
    this.value = ""

  }

  userWrote(): string{
    if(this.value.length == 0 ){
      return "Nothing!"
    } else{
      return this.value
    }
  }
}
