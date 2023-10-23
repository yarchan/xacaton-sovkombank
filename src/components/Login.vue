<template>
  <div>
    <div class="modal fade" id="thanksforquestion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content ">
          <div class="d-flex justify-content-end p-2">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="d-flex justify-content-center align-items-center px-3">
            <div class="modal-body d-flex flex-column justify-content-start p-0" style="max-width: 360px;">
              <h1 class="modal-title fw-bold d-flex justify-content-center fs-5 mb-5 " >
                Аторизация
              </h1>
              <input class="form-control mb-3" placeholder="Логин" type="text" name="" id="">
              <input class="form-control mb-3" placeholder="Пароль" type="text" name="" id="">
            </div>
          </div>
          <div class="d-flex justify-content-center w-100 px-3 mb-5" >
            <button  type="button" class="btn btn-1 fs-8  py-3 fw-bold rounded-pill" data-bs-dismiss="modal" style="max-width: 360px;" >
              Войти
            </button> 
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>