class ListaLocalS {
    constructor({elemRoot, }){
        this.elemRoot = elemRoot;

        this.render();
    }
    
    render(){
        this.elemRoot.innerHTML = `

        <div class="container">
        <h1 class="display-3">Tu Lista</h1>
        <p class="lead">Los elementos que se agreguen en la lista (producto y valor) se irán sumando. Aunque abandone la página, los elementos quedarán guardados en el Localstorage de su navegador (si refresca la página, los valores seguirán mostrándose).</p>
        <hr>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Valor sin IVA</th>
                    <th>Valor total</th>
                </tr>
            </thead>
            <tbody id="tbody">
                
            </tbody>
        </table>
        <br>
        <button class="btn btn-danger" id="btn_limpiar">Limpiar Carrito</button>
        <br>
        <hr>
        <h3>Agregar Producto</h3>
        <div class="d-flex">
            <div class="form-group col-4">
                <label for="producto">Producto</label>
                <input type="text" class="form-control" id="producto" name="producto">
            </div>
            <div class="form-group col-4">
                <label for="precio">Valor</label>
                <input type="number" class="form-control" id="precio" name="precio">
            </div>
            <div class="form-group col-2 mt-4">
                <button class="btn btn-success" type="button" id="btn_aceptar">Agregar</button>
            </div>
            
        </div>
        <hr>
        <h1 class="display-4">Características</h1>
        <p class="lead">La aplicacion fue diseñada implementando el patron módulo.</p>

    </div>


        
`;
}
}