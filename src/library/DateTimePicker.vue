<script lang="tsx">
  import type { PropType } from "vue";
  import { defineComponent } from "vue";
  const props = {
    id: { type: [Array, String] as PropType<string[] | string> },
  };
  export default defineComponent({
    name: "DateTimePicker",
    components: {},
    props,
    setup(props, { slots }) {
      return () => {
        return <div>{"日期时间选择器"}</div>;
      };
    },
  });
  </script>
  <style lang="less" scoped></style>
  