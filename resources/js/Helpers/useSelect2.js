export function useSelect2(node,{cb,store,key}){
    let values = '';
    jQuery(node).select2({
        tags:true
    });

    if (store){
      store.subscribe((data)=>{
          console.log(key,data[key],data);
        // jQuery(node).select2("val", data[key].split(','));
      });
    }
    //$("#customers_select").select2("val", "");
    jQuery(node).on('change',function(e){
        // alert(JSON.stringify(e.target.value));
        // node.change();
        // alert(node.value);
        // jQuery(node).trigger('input');

        console.log(jQuery(node).val());
        values = jQuery(node).val().join(',');
        cb(values);
    });
}
