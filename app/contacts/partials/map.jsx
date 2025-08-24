'use client'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'

const Maps = () => {
	return (
		<YMaps>
			<div className='map-container'>
				<Map 
					defaultState={{ center: [55.039909, 82.941702], zoom: 17 }}
					options={{ scrollZoom: false }}
				>
					<Placemark 
						geometry={[55.039909, 82.941702]} 
						options={{ 
							preset: 'islands#redDotIcon', // использует красный маркер
						}} 
						properties={{
							hintContent: 'VIRLAB', // создаёт всплывающую подсказку с текстом 'VIRLAB'
							balloonContent: 'VIRLAB' // создаёт контент в баллоне с текстом 'VIRLAB'
						}}
					/>
				</Map>
			</div>
		</YMaps>
	)
}

export default Maps
