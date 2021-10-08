<template>
    <div class="p-3 h-screen">
        <div v-if="editor">
            <button class="btn" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                bold
            </button>

            <button class="btn" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                italic
            </button>

            <button class="btn" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                strike
            </button>
        </div>

        <div v-if="editor">
            <button class="btn" @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
                code
            </button>
            <button class="btn" @click="editor.chain().focus().unsetAllMarks().run()">
                clear marks
            </button>
            <button class="btn" @click="editor.chain().focus().clearNodes().run()">
                clear nodes
            </button>
        </div>

        <div v-if="editor">
            <button class="btn" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
                paragraph
            </button>
            <button class="btn" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                h1
            </button>
            <button class="btn" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                h2
            </button>
            <button class="btn" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                h3
            </button>
            <button class="btn" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
                h4
            </button>
            <button class="btn" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
                h5
            </button>
            <button class="btn" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                h6
            </button>
        </div>

        <div v-if="editor">
            <button class="btn" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                bullet list
            </button>
            <button class="btn" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
                ordered list
            </button>
        </div>

        <div v-if="editor">
            <button class="btn" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
                code block
            </button>
            <button class="btn" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
                blockquote
            </button>
        </div>

        <div v-if="editor">
            <button class="btn" @click="editor.chain().focus().setHorizontalRule().run()">
                horizontal rule
            </button>
            <button class="btn" @click="editor.chain().focus().setHardBreak().run()">
                hard break
            </button>
        </div>

        <div v-if="editor">
            <button class="btn" @click="editor.chain().focus().undo().run()">
                undo
            </button>
            <button class="btn" @click="editor.chain().focus().redo().run()">
                redo
            </button>
        </div>

        <div class="p-3 mt-2 h-24 bg-green-100">
            <editor-content :editor="editor" />
        </div>

        <div class="p-3 mt-2 bg-pink-800 text-white">
            <h4 class="text-center py-5">Meagan Test</h4>
        </div>
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
      content: '<p>Begin typing here!</p>',
      extensions: [
        StarterKit,
      ],
    })

    return { editor }
  },
}
</script>
