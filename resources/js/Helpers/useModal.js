export function useModal(node,id){
    node.addEventListener('click',(e)=>{
        jQuery(id).modal();
    });
}
