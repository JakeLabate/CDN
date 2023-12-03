You can set the pixel size of the cursor in the 'data-cursor-size' attribute. Available cursor sizes range for 16 - 32.

<html>
<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th, td {
		border: 1px solid black;
		padding: 8px;
		text-align: left;
	}
	th {
		background-color: #f2f2f2;
	}
	td.dark {
		background-color: #111;
	}
	td a.dark {
		background-color: #111;
		padding: 8px;
		color: #fff;
		width: 100%;
	}
	td a.light {
		background-color: #fff;
		padding: 8px;
		color: #111;
		width: 100%;
	}
	td.m-hide, th.m-hide {
        padding: 6px 12px !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }
	@media only screen and (max-width: 768px) {
		td.m-hide, th.m-hide {
			display: none;
		}
	}
</style>
<table>
	<thead>
	<tr>
		<th>Destination</th>
		<th>Cursor Icon</th>
		<th class="m-hide">Hover Demo</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Facebook</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/facebook-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/facebook-light.svg'), auto" href="https://www.facebook.com/drjordanpeterson" target="_blank">https://www.facebook.com/drjordanpeterson</a></td>
	<tr>
		<td>Facebook</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/facebook-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false"  style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/facebook-dark.svg'), auto" href="https://www.facebook.com/drjordanpeterson" target="_blank">https://www.facebook.com/drjordanpeterson</a></td>
	</tr>
	<tr>
		<td>Instagram</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/instagram-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/instagram-light.svg'), auto" href="https://www.instagram.com/jake.labate" target="_blank">https://www.instagram.com/jake.labate</a></td>
	</tr>
	<tr>
		<td>Instagram</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/instagram-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/instagram-dark.svg'), auto" href="https://www.instagram.com/jake.labate" target="_blank">https://www.instagram.com/jake.labate</a></td>
	</tr>
	<tr>
		<td>Twitter / X</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/x-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/x-light.svg'), auto" href="https://twitter.com/labate_jake" target="_blank">https://twitter.com/labate_jake</a></td>
	</tr>
	<tr>
		<td>Twitter / X</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/x-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/x-dark.svg'), auto" href="https://twitter.com/labate_jake" target="_blank">https://twitter.com/labate_jake</a></td>
	</tr>
	<tr>
		<td>LinkedIn</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/linkedin-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/linkedin-light.svg'), auto" href="https://www.linkedin.com/in/jakelabate" target="_blank">https://www.linkedin.com/in/jakelabate</a></td>
	</tr>
	<tr>
		<td>LinkedIn</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/linkedin-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/linkedin-dark.svg'), auto" href="https://www.linkedin.com/in/jakelabate" target="_blank">https://www.linkedin.com/in/jakelabate</a></td>
	</tr>
	<tr>
		<td>TikTok</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/tiktok-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/tiktok-light.svg'), auto" href="https://www.tiktok.com/@j.labate" target="_blank">https://www.tiktok.com/@j.labate</a></td>
	</tr>
	<tr>
		<td>TikTok</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/tiktok-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/tiktok-dark.svg'), auto" href="https://www.tiktok.com/@j.labate" target="_blank">https://www.tiktok.com/@j.labate</a></td>
	</tr>
	<tr>
		<td>YouTube</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/youtube-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/youtube-light.svg'), auto" href="https://www.youtube.com/@jakelabate" target="_blank">https://www.youtube.com/@jakelabate</a></td>
	</tr>
	<tr>
		<td>YouTube</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/youtube-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/youtube-dark.svg'), auto" href="https://www.youtube.com/@jakelabate" target="_blank">https://www.youtube.com/@jakelabate</a></td>
	</tr>
	<tr>
		<td>Page section</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/section-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/section-light.svg'), auto" href="#info">#info</a></td>
	</tr>
	<tr>
		<td>Page section</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/section-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/section-dark.svg'), auto" href="#info">#info</a></td>
	</tr>
	<tr>
		<td>Internal URL</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/internal-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/internal-light.svg'), auto" href="https://www.jakelabate.com" target="_blank">https://www.jakelabate.com</a></td>
	</tr>
	<tr>
		<td>Internal URL</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/internal-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/internal-dark.svg'), auto" href="https://www.jakelabate.com/" target="_blank">https://www.jakelabate.com</a></td>
	</tr>
	<tr>
		<td>External URL</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/external-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/external-light.svg'), auto" href="https://github.com/JakeLabate" target="_blank">https://github.com/JakeLabate</a></td>
	</tr>
	<tr>
		<td>External URL</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/external-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/external-dark.svg'), auto" href="https://github.com/JakeLabate" target="_blank">https://github.com/JakeLabate</a></td>
	</tr>
	<tr>
		<td>Email</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/email-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/email-light.svg'), auto" href="mailto:jake.a.labate@gmail.com" target="_blank">jake.a.labate@gmail.com</a></td>
	</tr>
	<tr>
		<td>Email</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/email-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/email-dark.svg'), auto" href="mailto:jake.a.labate@gmail.com" target="_blank">jake.a.labate@gmail.com</a></td>
	</tr>
	<tr>
		<td>Phone (call)</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/phone-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/phone-light.svg'), auto" href="tel:203-907-5536" target="_blank">Call 203-907-5536</a></td>
	</tr>
	<tr>
		<td>Phone (call)</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/phone-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/phone-dark.svg'), auto" href="tel:203-907-5536" target="_blank">Call 203-907-5536</a></td>
	</tr>
	<tr>
		<td>SMS (text)</td>
		<td class="dark"><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/sms-light.svg"></td>
		<td class="dark m-hide"><a class="dark" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/sms-light.svg'), auto" href="sms:203-907-5536" target="_blank">Text 203-907-5536</a></td>
	</tr>
	<tr>
		<td>SMS (text)</td>
		<td><img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/sms-dark.svg"></td>
		<td class="m-hide"><a class="light" data-u="false" style="cursor: url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/24px/sms-dark.svg'), auto" href="sms:203-907-5536" target="_blank">Text 203-907-5536</a></td>
	</tr>
	</tbody>
</table>



<style>
	img[src*="px"] {
		margin: 4px;
	}
</style>
<table>
	<thead>
		<tr>
			<th>Pixel Sizes</th>
			<th>Render Size Demo</th>
		</tr>
	</thead>
	<tbody>
	<tr>
		<td>16px</td>
		<td class="dark columns">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/facebook-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/instagram-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/x-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/linkedin-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/tiktok-light.svg">
		</td>
		<td class="columns">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/facebook-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/instagram-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/x-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/linkedin-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/16px/tiktok-dark.svg">
		</td>
	</tr>
	<tr>
		<td>22px</td>
		<td class="dark columns">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/facebook-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/instagram-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/x-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/linkedin-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/tiktok-light.svg">
		</td>
		<td class="columns">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/facebook-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/instagram-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/x-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/linkedin-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/22px/tiktok-dark.svg">
		</td>
	</tr>
	<tr>
		<td>28px</td>
		<td class="dark columns">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/facebook-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/instagram-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/x-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/linkedin-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/tiktok-light.svg">
		</td>
		<td class="columns">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/facebook-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/instagram-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/x-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/linkedin-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/28px/tiktok-dark.svg">
		</td>
	</tr>
	<tr>
		<td>32px</td>
		<td class="dark columns">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/facebook-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/instagram-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/x-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/linkedin-light.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/tiktok-light.svg">
		</td>
		<td class="columns">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/facebook-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/instagram-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/x-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/linkedin-dark.svg">
			<img src="https://cdn.jakelabate.com/indicative-link-cursors/cursors/32px/tiktok-dark.svg">
		</td>
	</tr>
	</tbody>
</table>

</html>