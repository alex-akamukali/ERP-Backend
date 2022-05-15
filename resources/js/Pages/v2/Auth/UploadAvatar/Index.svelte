<script context="module">
    import { page, useForm } from "@inertiajs/inertia-svelte";
</script>

<script>
    export let user; // = $page.props.user;
    let avatarImage = null;
    let avatar = null;
    let form = useForm({
        avatar: null,
        _method:'PUT'
    });

    function updateAvatar(){
         $form.post("/upload-avatar/" + user.id);
    }

    function openfileDialog() {
        //   $("#fileLoader").click();
        // avatarImage.src = null;
        avatar.value = null;
        avatar.click();
    }

    function onFileSelected(event) {
        //   console.log(event);
        //   return;
        var selectedFile = event.target.files[0];
        var reader = new FileReader();

        var imgtag = avatarImage; // document.getElementById("myProfileImage");
        imgtag.title = selectedFile.name;

        reader.onload = function (event) {
            imgtag.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);

        updateAvatar();
    }
</script>

<div class="box box-primary">
    <div class="box-body box-profile">
        <img
            bind:this={avatarImage}
            id="myProfileImage"
            src={"/uploads/" + user.avatar}
            class="profile-user-img img-responsive img-circle"
            alt="User Profile"
            width="100"
            height="100"
        />

        <h3 class="profile-username text-center">Alex Akamukali</h3>

        <p class="text-muted text-center" />
        <input
            on:input={(e) => ($form.avatar = e.target.files[0])}
            bind:this={avatar}
            style="display: none;"
            type="file"
            id="fileLoader"
            name="ProfilePhoto"
            accept="image/*"
            on:change={onFileSelected}
        />

        <ul class="list-group list-group-unbordered">
            <li class="list-group-item">
                <!-- svelte-ignore a11y-missing-attribute -->
                <b>Contracts</b>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="#" class="pull-right">543</a>
            </li>
        </ul>

        <button
            class="btn btn-primary btn-block"
            on:click|preventDefault={openfileDialog}
            ><b>Upload My Passport Photo</b></button
        >
    </div>
</div>
