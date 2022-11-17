import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import './styles/index.scss';
import './assets/fonts/Roboto-Regular.ttf';
import { fakeApi } from './styles/components/fakeReqApi';

const sendBtn = <HTMLButtonElement>document.getElementById('form_button');
const form_input = (<HTMLInputElement>document.getElementById('form_input'));


sendBtn?.addEventListener('click', () => {
  (form_input.value != '') ? fakeApi(Number(form_input.value)) : alert('Введите номер')
  form_input.value = ''
});

library.add(faCheck);
dom.watch();