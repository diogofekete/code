/**
 * 
 */
var UserProfile = {
	/** */
	UA_BB: 'bb10',
	UA_ANDROID: 'android',
	UA_IPHONE: 'iphone',
	UA_IPAD: 'ipad',
	
	isOnline: navigator.onLine,
	
	isAuthenticated: false,
	
	/**
	 * 
	 */
	isTouchDevice: function() {
		if (navigator.userAgent.toLowerCase().indexOf(this.UA_ANDROID) != -1 ||
			navigator.userAgent.toLowerCase().indexOf(this.UA_IPHONE) != -1 ||
			navigator.userAgent.toLowerCase().indexOf(this.UA_IPAD) != -1 ||
			navigator.userAgent.toLowerCase().indexOf(this.UA_BB) != -1 ){
			return true;
		}
		else {
			return false;
		}
	},
	
	/**
	 * 
	 */
	supportsAudio: function() {
		return !this.isTouchDevice();
	},
	
	/**
	 * 
	 */
	supportsAjax: function() {
		return window.XMLHttpRequest != null && this.isOnline;
	},
	
	/**
	 * 
	 */
	supportsLocalStorage: function() {
		return ('localStorage' in window) && window['localStorage'] !== null;
	}
};
