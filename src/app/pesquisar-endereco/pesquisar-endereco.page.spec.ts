import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesquisarEnderecoPage } from './pesquisar-endereco.page';

describe('PesquisarEnderecoPage', () => {
  let component: PesquisarEnderecoPage;
  let fixture: ComponentFixture<PesquisarEnderecoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarEnderecoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesquisarEnderecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
