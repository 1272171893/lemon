<script lang="tsx">
  import type { PropType } from "vue";
  import { defineComponent } from "vue";
  const props = {
    id: { type: [Array, String] as PropType<string[] | string> },
  };
  export default defineComponent({
    name: "InputNumber",
    components: {},
    props,
    setup(props, { slots }) {
      return () => {
        return <div>{"计数器"}</div>;
      };
    },
  });
  </script>
  <style lang="less" scoped></style>
  