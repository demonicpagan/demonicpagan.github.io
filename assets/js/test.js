// Roland Yonaba - 2012
// Base code (http://aboutcode.net/2010/11/11/list-github-projects-using-javascript.html)
// Fix for compatibility with Github API v3 (http://developer.github.com/v3/)
// Fix getJSOn link request for compatibility with Github API v3 (thanks to MJoyce : http://stackoverflow.com/questions/11850527/use-javascript-to-get-the-list-of-a-users-github-repositories)

jQuery.githubUser = function(username, callback) {
  jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback);
}

jQuery.fn.loadRepositories = function(username) {
  this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
 
  var target = this;
  $.githubUser(username, function(data) {
	var repos = data.data; // JSON Parsing
	sortByName(repos);

	var table = $('<table width="100% id="ghrepos">');
	target.empty().append(table);
	for (var i = 0; i < 4; i++) {
		table.append('<tr align="center"><td>');

		for (var k = 0; k < repos.length; k++) {
			if (this.name != (username.toLowerCase()+'.github.io')) {
				table.append('<table class="ob">');
				table.append('<tr><td colspan="2"><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a></td><td align="center"><em>'+(this.language?('('+this.language+')'):'')+'</em></td></tr>');
				table.append('<tr><td colspan="3">'+ this.description +'</td></tr>');
				table.append('<tr><td><em>Size: '+(this.size<1000?(this.size+' kB'):(Math.round((this.size/1000)*100)/100+' MB</em>'))+'</td><td><em>Watchers: '+this.watchers+'</em></td><td><em>Forks: '+this.forks+'</em></td></tr>');
				table.append('</table>');
			}
		}

		table.append('</td></tr></table>');
	}
  });

  function sortByName(repos) {
	repos.sort(function(a,b) {
	  return a.name - b.name;
	});
  }
};
