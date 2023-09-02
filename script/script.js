// Search--------------------------------------------------------------------------

let search = document.querySelector('.header__find');
let searchHidden = document.querySelector('.header__search--hidden');

search.addEventListener('click', () => {
  searchHidden.classList.toggle('header__search--visible');
});


// Mask and Valid--------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');

  validation
  .addField('.form__name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Слишком короткое имя"
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: "Максимальное количество символов - 15"
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя'
    }
  ])
  .addField('.form__mail', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Вы не корректно ввели e-mail',
    }
  ])
})