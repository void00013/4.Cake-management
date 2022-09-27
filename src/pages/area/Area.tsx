import { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import { areaGet, areaAdd } from '@/api/cake'
import styles from './Area.less'

export default function Area() {
  // 用ref引用也可以挂载地图
  // let mapRef = useRef()

  const [drawing, setDrawing] = useState(false)

  var mouseTool = null
  var polyEditor = null

  useEffect(() => {
    // new AMap.Map(mapRef.current)
    var map = new AMap.Map("container", {
      center: [112.549248, 37.857014],
      zoom: 10
    });

    areaGet('太原市')
    .then(res => {
      console.log(res)
      // res.results.forEach((item: any, index: any) => {
      //   let polygon = new AMap.Polygon({
      //     path: item.path,
      //     strokeColor: "#FF33FF",
      //     strokeWeight: 6,
      //     strokeOpacity: 0.2,
      //     fillOpacity: 0.4,
      //     fillColor: '#1791fc',
      //     zIndex: 50,
      //     bubble: true,
      //   })
      //   if(index === 0) {
      //     polyEditor = new AMap.PolyEditor(map, polygon)
      //   }
      //   polyEditor.addAdsorbPolygons(polygon)
      // })
      // polyEditor.open()
    })
    .catch(err => console.log(err))

    mouseTool = new AMap.MouseTool(map)

    mouseTool.on('draw', function(e: any) {
      // event.obj 为绘制出来的覆盖物对象
      let path = e.obj.getPath()
      let arr = path.map((item: any) => [item.lng, item.lat])
      // console.log('覆盖物对象绘制完成', path)
      console.log('覆盖物对象绘制完成', arr)
      areaAdd({
        city: '太原市',
        path: arr
      })
      setDrawing(false)
    })
  }, [])

  function drawPolygon () {
    setDrawing(true)
    mouseTool.polygon({
      strokeColor: "#FF33FF", 
      // strokeOpacity: 1,
      strokeWeight: 6,
      strokeOpacity: 0.2,
      fillColor: '#1791fc',
      fillOpacity: 0.4,
      // 线样式还支持 'dashed'
      strokeStyle: "solid",
      // strokeStyle是dashed时有效
      // strokeDasharray: [30,10],
    })
  }

  return (
    <div>
      <Button type='primary' onClick={drawPolygon} disabled={drawing}>{drawing ? '正在绘制' : '开始绘制'}</Button>
      {/* <div className={styles.map} ref={mapRef} */}
      <div className={styles.map} id='container'>
        Area
      </div>
    </div>
  )
}
