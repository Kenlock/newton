<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="card c-pointer shadow border-0 rounded">
                    <div class="card-body">
                        <BIconArrow90degDown />
                        <h3 class="card-title">Students</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card c-pointer shadow border-0 rounded">
                    <div class="card-body">
                        <h3 class="card-title">News</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card c-pointer shadow border-0 rounded">
                    <div class="card-body">
                        <h3 class="card-title">Ekskul</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["info"],
};
</script>

<style></style>
