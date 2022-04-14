<template>
    <div class="container">
        <div class="row">

            <div class="col">
                <div class="card">
                    <div class="card-header">
                        {{props.head1}}
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group" v-show="props.isDecrypt == true ">
                            <input type="text" class="form-control" placeholder="Key" name="key">
                            <br>
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Mensaje" name="mensaje">
                            <br>
                            </div>
                            <div class="form-group">
                            <input type="submit" class="btn btn-success btn-block" >

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <div class="card-header">
                        {{props.head2}}
                    </div>
                    <div class="card-body">
                        <p>{{ props.msg }}</p>
                    </div>
                </div>
            
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isDecrypt: {
        Boolean,
        default: false
    },
    msg: { 
        String,
        default:'1'
        },
    head1: {
        String, 
        default: 'Mesaje a encriptar'
        },
    head2: {
        String,
        default: 'Mesaje encriptado'
        }
})
</script>