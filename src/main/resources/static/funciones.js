function eliminar(id){
	swal({
  title: "esta seguro que desea eliminar?",
  text: "si elimina perdera los datos!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
	$.ajax({
		url:"/eliminar/"+id,
		success: function(res){
			console.log(res);
			
		},
	});
    swal("se elimino los datos!", {
      icon: "success",
    }).then((ok)=>{
	if(ok){
	location.href="/listar";
}
});
  } else {
    swal("precione ok");
  }
});
}
