function myFunction() {
var x = document.getElementById('fname').value;
var y = document.getElementById('lname').value;
var z = document.getElementById('aname').value;
var s = document.getElementById('subject').value;


  if(x != '' && y != '' && z != '' && s != ''){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    color: '#000',
   
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'E-mail Enviado! '
  })
}else{

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    color: '#000',
   
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
    title: 'Erro ao Enviar Mensagem! '
  })

}

    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
    document.getElementById('aname').value='';
    document.getElementById('subject').value='';
   
 

  }