<script lang="tsx">
  import type { PropType } from "vue";
  import { defineComponent } from "vue";
  const props = {
    id: { type: [Array, String] as PropType<string[] | string> },
  };
  export default defineComponent({
    name: "Upload",
    components: {},
    props,
    setup(props, { slots }) {
      return () => {
        return <div>{"上传"}</div>;
      };
    },
  });
  </script>
  <style lang="less" scoped></style>
  