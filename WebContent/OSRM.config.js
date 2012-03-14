/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU AFFERO General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
or see http://www.gnu.org/licenses/agpl.txt.
*/

// OSRM config file
// [has to be loaded directly after OSRM.base]

OSRM.DEFAULTS = {
	HOST_ROUTING_URL: 'http://router.project-osrm.org/viaroute',
	HOST_SHORTENER_URL: 'http://map.project-osrm.org/shorten/',
	WEBSITE_URL: 'http://map.project-osrm.org/',
	JSONP_TIMEOUT: 2000,
	ZOOM_LEVEL: 14,
	ONLOAD_LATITUDE: 48.84,
	ONLOAD_LONGITUDE: 10.10,
	ONLOAD_SOURCE: "",
	ONLOAD_TARGET: "",
	LANGUAGE: "en",
};
