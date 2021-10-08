<template>
  <editor-content class="bg-green-900" :editor="editor" />
  <div class="w-100 bg-pink-800 text-white">
      <h4 class="text-center py-5">Meagan Test</h4>
  </div>
</template>

<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },

  setup() {
    const editor = useEditor({
      content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })

    return { editor }
  },
}
</script>
