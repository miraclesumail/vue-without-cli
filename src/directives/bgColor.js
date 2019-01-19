export default {
    bind (el, binding, vnode) {
        console.log(el);
        console.log(binding);
        console.log(vnode);
        console.log(vnode.context.text);
        console.log(vnode.context.say());
        el.style.background = binding.value;
    },

    update (el, binding, vnode, oldNode) {
        console.log('update');
        // el.style.background = binding.value
    }
};
