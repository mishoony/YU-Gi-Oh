import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  createProductFormGroup : FormGroup = this.formBuilder.group({

  })

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
