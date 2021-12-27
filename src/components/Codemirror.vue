<template>
  <h5>Editor</h5>
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    placeholder="test placeholder"
    :height="200"
    @change="change"
  />
  <h5>Data</h5>
  <div>{{ code }}</div>
</template>

<script>
import Codemirror from "codemirror-editor-vue3";

// language
import "codemirror/mode/javascript/javascript.js";

// theme
import "codemirror/theme/material.css";

import { ref } from "vue";
export default {
  components: { Codemirror },
  setup() {
    const code = ref(`{}`);

    return {
      code,
      cmOptions: {
        mode: "text/javascript", // Language mode
        theme: "material", // Theme
        tabSize: 2, // Tab size
        lineNumbers: true, // Show line number
        smartIndent: true, // Smart indent
        indentUnit: 2, // The smart indent unit is 2 spaces in length
        foldGutter: true, // Code folding
        styleActiveLine: true, // Display the style of the selected row
      },
    };
  },
};
</script>