const loader = {
  title: 'Cargando',
  html: `<div class='loadingio-spinner-eclipse-2jj7ryb2t5c'>
          <div class='ldio-b9u4anwey1'>
            <div></div>
          </div>
        </div>`,
  showConfirmButton: false,
};

const addedItem = {
  title: 'Producto agregado',
  confirmButtonText: 'Aceptar',
};

const paySuccess = {
  title: 'Compra realizada',
  icon: 'success',
  confirmButtonText: 'Aceptar',
};

const error = {
  title: 'Ocurrió un error',
  icon: 'error',
  confirmButtonText: 'Aceptar',
};

const swalConfig = { paySuccess, addedItem, loader, error };

export default swalConfig;
