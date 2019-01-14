/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/dom/isnode
 */

/**
 * Checks if the object is a native DOM Node.
 * This version is specific to usage with grapesjs
 *
 * @param {*} obj
 * @returns {Boolean}
 */
export default function isNode( obj ) {
	if ( obj ) {
		if (obj.defaultView) {
			if (obj.defaultView.frameElement != null) {
				if (obj.defaultView.frameElement.className.includes('gjs-frame')) {
					return obj instanceof obj.defaultView.Document;
				}
			}
			return obj instanceof obj.defaultView.Document;
		} else if (obj.ownerDocument && obj.ownerDocument.defaultView) {
			if (obj.ownerDocument.defaultView.frameElement != null) {
				if (obj.ownerDocument.defaultView.frameElement.className.includes('gjs-frame')) {
					return obj instanceof obj.ownerDocument.defaultView.frameElement.ownerDocument.defaultView.Node;
				}
			}
			return obj instanceof obj.ownerDocument.defaultView.Node;
		}
	}

	return false;
}

// export default function isNode( obj ) {
// 	if ( obj ) {
// 		if ( obj.defaultView ) {
// 			return obj instanceof obj.defaultView.Document;
// 		} else if ( obj.ownerDocument && obj.ownerDocument.defaultView ) {
// 			return obj instanceof obj.ownerDocument.defaultView.Node;
// 		}
// 	}
//
// 	return false;
// }
