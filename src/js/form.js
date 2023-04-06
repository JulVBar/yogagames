function form() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const controls = form.querySelectorAll('.form__control');
        const formSubmit = form.querySelector('button[type="submit"]');
        const formReset = form.querySelector('button[type="reset"]');

        controls?.forEach(control => {
            const input = control.querySelector('input');
            const label = control.querySelector('label');
            if (input?.required) {
                const star = document.createElement('span');
                star.textContent = '*';
                star.style.color = 'crimson';
                label.appendChild(star);
            }
        })

        // на кнопке просто отображаем ошибки по инпутам, проверку на валидность перед отправкой делаем по форме дальше
        // если добавлен pattern в html то общую проверку делать не надо, вылезают подсказки
        if (formSubmit) {
            formSubmit.addEventListener('click', (e) => {
                // e.preventDefault();
                
                controls?.forEach(control => {
                    const input = control.querySelector('input');
                    const error = control.querySelector('.form__control-error');
                    const errorReq = control.querySelector('.form__control-error-req');
                    // console.log(inputValidation(input));
                    (input?.required && !input?.value && errorReq) ? errorReq?.classList.add('show') : errorReq?.classList.remove('show');

                    (!inputValidation(input) && input?.value && error) ? error?.classList.add('show') : error?.classList.remove('show');

                    input?.addEventListener('input', () => {
                        error?.classList.remove('show');
                        errorReq?.classList.remove('show');
                    })
                    // проверку не на кнопку а при попытке отправить <form action="/feedback/" method="post" onsubmit="return (ValidMail()&&ValidPhone())">
                    // маска на телефон
                    // общее кол-во ошибок складываем перед отправкой именно
                })
            })
        }
    })

    function inputValidation(input) {
        let valid = true;
        if (input?.name === 'email' && input?.value) {
            valid = /^[\w\.]+@[\w-]+\.[a-z]{2,4}$/i.test(input.value)
        }
        if (input?.name === 'phone' && input?.value) {
            valid = /^[\d\+][\d\(\)\ -]{4,16}\d$/.test(input.value);
        }
        return valid;
    }

    // function  formValidation() {
    //     let inputErr = 0;
    
    //     reqInputs.forEach(input => {
    //         if (input.value === '') {
    //             showErrorMessage(input, message.inputError);
    //             inputErr++;
    //         } else {
    //             input.style.border = 'none';
    //         }
    
    //         if (input.getAttribute('name') === 'title' && input.value.length > 101) {
    //             showErrorMessage(input, message.titleError);
    //             inputErr++;
    //         }
    
    //         if (input.getAttribute('name') === 'descr' && input.value.length > 301) {
    //             showErrorMessage(input, message.descrError);
    //             inputErr++;
    //         }
    //     });
    
    //     if (document.querySelector('#formImage').value == '') {
    //         openModalOk(message.posterFailed, 'hidden', 'visible'); 
    //         inputErr++;
    //     }
    
    //     return inputErr;
    // }

    // function closeModalOk() {
    //     modalOk.style.opacity = 0;
    //     modalOk.style.visibility = "hidden";
    // }
    
    
    // function openModalOk(statusmes, spinerVis, btnVis) {
    //     modalOk.style.opacity = 1;
    //     modalOk.style.visibility = "visible";
    
    //     modalTitle.textContent = statusmes;
    //     modalSpiner.style.visibility = `${spinerVis}`;
    //     btnOk.style.visibility = `${btnVis}`;
    // }






    
}
export default form;