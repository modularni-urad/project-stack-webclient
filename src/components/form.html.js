export default `
<ValidationObserver v-slot="{ invalid }">
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-sm-12">

        <validation-provider rules="required" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Název"
            label-for="nazev-input" :invalid-feedback="errors[0]"
          >
            <b-form-input id="nazev-input" v-model="nazev" :state="errors.length === 0">
            </b-form-input>
          </b-form-group>
        </validation-provider>

      </div>
    </div>

    <div class="row">
      <div class="col-sm-4">
        <validation-provider rules="required" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Stadium" 
            label-for="stadium-input" :invalid-feedback="errors[0]"
          >
            <b-form-select id="stadium-input" v-model="stadium"
            :state="errors.length === 0" :options="stateOpts">
            </b-form-select>
          </b-form-group>
        </validation-provider>
      </div>

      <div class="col-sm-4">
        <validation-provider rules="required" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Poloha - GPS souřadnice" 
            label-for="poloha-input" :invalid-feedback="errors[0]"
          >
            <b-form-input id="poloha-input" v-model="poloha" :state="errors.length === 0">
            </b-form-input>
          </b-form-group>
        </validation-provider>
      </div>

      <div class="col-sm-4">
        <validation-provider rules="" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Cena"
            label-for="cena-input" :invalid-feedback="errors[0]"
          >
            <b-form-input id="cena-input" type="number"
              v-model="cena" :state="errors.length === 0">
            </b-form-input>
          </b-form-group>
        </validation-provider>
      </div>  
    </div>

    <div class="row">
      <div class="col-sm-12">
        <validation-provider rules="required" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Popis" 
            label-for="popis-input" :invalid-feedback="errors[0]"
          >
            <b-form-textarea rows="5" id="popis-input"
              v-model="popis" :state="errors.length === 0">
            </b-form-textarea>
          </b-form-group>
        </validation-provider>
      </div>
    </div>

    <b-button type="submit" class="mt-3" block :disabled="invalid">
      Save
    </b-button>
  </form>
</ValidationObserver>
`