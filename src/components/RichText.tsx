import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { useEffect, useState } from 'react'

export default function RichText(props: any) {
  // console.log(props)
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null)

  // 编辑器内容
  const [html, setHtml] = useState('<p>hello</p>')

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
      setTimeout(() => {
          setHtml('<p>hello world</p>')
      }, 1500)
  }, [])

  // 使用该方法可以查看全部的工具栏配置
  // console.log(editor?.getAllMenuKeys())

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {
    // 工具栏全部配置
    toolbarKeys: [
      'bold',
      'underline',
      'italic',
      'through',
      'code',
      'sub',
      'sup',
      'clearStyle',
      'color',
      'bgColor',
      'fontSize',
      'fontFamily',
      'indent',
      'delIndent',
      'justifyLeft',
      'justifyRight',
      'justifyCenter',
      'justifyJustify',
      'lineHeight',
      'insertImage',
      'deleteImage',
      'editImage',
      'viewImageLink',
      'imageWidth30',
      'imageWidth50',
      'imageWidth100',
      'divider',
      'emotion',
      'insertLink',
      'editLink',
      'unLink',
      'viewLink',
      'codeBlock',
      'blockquote',
      'headerSelect',
      'header1',
      'header2',
      'header3',
      'header4',
      'header5',
      'todo',
      'redo',
      'undo',
      'fullScreen',
      'enter',
      'bulletedList',
      'numberedList',
      'insertTable',
      'deleteTable',
      'insertTableRow',
      'deleteTableRow',
      'insertTableCol',
      'deleteTableCol',
      'tableHeader',
      'tableFullWidth',
      'insertVideo',
      'uploadVideo',
      'editVideoSize',
      'uploadImage',
      'codeSelectLang'
    ]
  }

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {}

  // 及时销毁 editor ，重要！
  useEffect(() => {
      return () => {
          if (editor == null) return
          editor.destroy()
          setEditor(null)
      }
  }, [editor])


  return (
    <div>
      <div style={{ border: '1px solid #ccc', zIndex: 100}}>
        <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={editor => {
            setHtml(editor.getHtml())
            props.onChange(editor.getHtml())
          }}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
      <div style={{ marginTop: '15px' }}>
        {html}
      </div>
    </div>
  )
}
