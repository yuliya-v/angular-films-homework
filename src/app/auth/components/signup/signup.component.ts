import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  submitted = false;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    const { lang } = this.route.snapshot.params;
    this.translateService.use(lang);
    this.translateService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(e => {
      this.router.navigate([`/${e.lang}`, 'auth', 'signup']);
    });
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
