import Swal from 'sweetalert2';

export const showAlert = configObj => {
  Swal.fire(configObj);
};

export const closeAlert = () => {
  Swal.close();
};
