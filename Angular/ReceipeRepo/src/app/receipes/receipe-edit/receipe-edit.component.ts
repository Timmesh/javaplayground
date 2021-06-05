import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { ReceipeService } from "../receipe.service";

@Component({
  selector: "app-receipe-edit",
  templateUrl: "./receipe-edit.component.html",
  styleUrls: ["./receipe-edit.component.css"],
})
export class ReceipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  receipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private receipeService: ReceipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  private initForm() {
    let receipeName = "";
    let receipeImagePath = "";
    let receipeDescription: string = "";

    if (this.editMode) {
      const receipe = this.receipeService.getReceipe(this.id);
      receipeName = receipe.name;
      receipeImagePath = receipe.imagePath;
      receipeDescription = receipe.description;
    }
    this.receipeForm = new FormGroup({
      'name': new FormControl(receipeName),
      'imagePath': new FormControl(receipeImagePath),
      'description': new FormControl(receipeDescription),
    });
  }

  onSubmit() {
    console.log("This");
    
    console.log(this.receipeForm);
    
  }
}
