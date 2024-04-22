import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = []
		this._brands = []

		this._devices = []
		// 	{id: 1, name: "iphone 15 pro", price: 1200, rating: 5, img: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_ad326452-186a-484a-99a4-82dc80c280fb.jpg?v=1694759404'},
		// 	{id: 2, name: "iphone 15 pro", price: 1200, rating: 5, img: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_ad326452-186a-484a-99a4-82dc80c280fb.jpg?v=1694759404'},
		// 	{id: 3, name: "iphone 15 pro", price: 1200, rating: 5, img: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_ad326452-186a-484a-99a4-82dc80c280fb.jpg?v=1694759404'},
		// 	{id: 4, name: "iphone 15 pro", price: 1200, rating: 5, img: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_ad326452-186a-484a-99a4-82dc80c280fb.jpg?v=1694759404'},
		// 	{id: 5, name: "iphone 15 pro", price: 1200, rating: 5, img: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_ad326452-186a-484a-99a4-82dc80c280fb.jpg?v=1694759404'},
		// 	{id: 6, name: "iphone 15 pro", price: 1200, rating: 5, img: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_ad326452-186a-484a-99a4-82dc80c280fb.jpg?v=1694759404'},
		// ]
		this._selectedType = {}
		this._selectedBrand = {}
		makeAutoObservable(this)
	}
	setTypes(types) {
		this._types = types
	}
	setBrands(brands) {
		this._brands = brands
	}
	setDevices(devices) {
		this._devices = devices
	}
	setSelectedType(type) {
		this._selectedType = type
	}
	setSelectedBrand(brand) {
		this._selectedBrand = brand
	}

	get types() {
		return this._types
	}
	get brands() {
		return this._brands
	}
	get devices() {
		return this._devices
	}
	get selectedType() {
		return this._selectedType
	}
	get selectedBrand() {
		return this._selectedBrand
	}
}
