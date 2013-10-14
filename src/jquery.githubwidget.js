/*
 * jQuery Github Widget - A jQuery plugin to show your Github repositories.
 * Version 0.1
 * http://messense.me
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
;(function($) {

	var sort_result = function (array, target) {
        var result = [];

        while (result.length < array.length) {
            var pushitem = null;
            for (var index in array) {
                if (array[index].__sorted != true && (pushitem == null || pushitem[target] < array[index][target])) {
                    pushitem = array[index];
                }
            }
            pushitem.__sorted = true;
            result.push(pushitem);
        }
        return result;
    }

	$.fn.githubwidget = function (options) {
		var defaults = {
			user : '',
			count : 0,
			sortby : 'pushed_at'
		};
		var settings = $.extend(defaults, options);
		this.each(function () {
			var panel = $(this);
			settings.user = panel.attr('data-user') || settings.user;
			settings.sortby = panel.attr('data-sortby') || settings.sortby;
			var count = panel.attr('data-count');
			if (count && parseInt(count) > 0)
			    settings.count = parseInt(count);

			$.ajax({
				url : 'https://api.github.com/users/' + settings.user + '/repos',
				type : 'get',
				dataType: 'jsonp',
                cache: false,
                async: false,
                success: function (result) {
                	if (result.meta.status == 200) {
                        // jsonp OK
                        result.data = sort_result(result.data, settings.sortby);
                        if (settings.count > 0 && settings.count < result.data.length)
                        	result.data = result.data.slice(0, settings.count);

                        $(result.data).each(function (index) {
                            var date = new Date(this.pushed_at);
                            var dateForm = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
                            this.language = this.language || '';
                            this.homepage = this.homepage || '';
                            var division = $('<div class="repos"></div>');
                            division.append($('<div class="reposname">' +
                                    '<span class="mini-icon public-repo"></span> <a href="' + this.html_url + '" target="_blank">' +
                                    this.name + '</a>' +
                                    '<div class="reposstate">' +
                                        this.language +
                                        ' &nbsp;<a href="' + this.html_url + '/watchers" target="_blank" title="Watchers"><span class="mini-icon watchers"></span> ' +
                                        this.watchers +
                                        ' <a href="' + this.html_url + '/network" target="_blank" title="Forks"><span class="mini-icon fork"></span>' +
                                        this.forks +
                                        '</a>' +
                                    '</div>' +
                                '</div>'));
                            division.append($('<div class="reposbody">' +
                                                        '<a href="' + this.html_url + '/zipball/master" class="minibutton btn-download" title="Download this repository as a zip file">' +
                                                        '<span class="icon"></span>ZIP' +
                                                        '</a>' +

                                                        this.description +
                                                        '<div class="lastupdated">Last updated on ' + dateForm + '</div>' +
                                                        '<a href="' + this.homepage + '" target="_blank">' + this.homepage + '</a>' +
                                                    '</div>'));
                            panel.append(division);
                        });
                    }
                }
			});
		});
	};
})(jQuery);