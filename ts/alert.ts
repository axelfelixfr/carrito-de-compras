export function alertaProductos(){
    $('.agregarCarrito').on('click',function(e){
        e.preventDefault();
        // alert('No estas logueado');
        document.getElementById('alertaProductos')!.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                    <strong><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></strong> Debes estar identificado(a) para comprar productos.
                                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>`;
    
    });
}