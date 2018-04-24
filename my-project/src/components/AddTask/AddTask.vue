Vue.component('AddTask', {
  template: (
    <div class="AddTask-form">
      <div class="container AddTask-container">
        <form>
          <div class="form-div">
            <label class="label-div">Titulo: </label>
            <el-input placeholder="Please enter the name of your new task" v-model="input"></el-input>
            <small class="form-text text-muted">Este campo es requerido!.</small>
          </div>
          <div class="form-div">
            <label class="label-div">Descripcion: </label>
            <el-input placeholder="Please enter a description for your new task" v-model="input"></el-input>
            <small class="form-text text-muted">Este campo es requerido!.</small>
          </div>
          <el-button class="btn-AddTask" type="warning" plain v-on:click='handleAddTask'>Primary</el-button>
        </form>
      </div>
    </div>)
})
