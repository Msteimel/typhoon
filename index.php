<!DOCTYPE html>
<html>
<?php include 'includes/global/head/index.php';?>

<body>
	<section class="hero">
		<?php include 'includes/global/header/index.php';?>
		<div class="grid">
			<div class="col-12">
				<div class="hero-content hero-fade fade">
					<h1 class="hero--headline">Another Dumb Framework</h1>
					<p>I built this to challenge myself and learn more about frameworks and element design.</p>
				</div>
			</div>
		</div>
		<div class="hero--overlay"></div>
	</section>

	<section id="type" class="grid">
		<div class="col-11">
			<div class="section-headlines">
				<h1 class="section-title">Type Style</h1>
				<p class="lead">The text is fully responsive by using ems on a per element basis or using an include
					that allows you set the min and max font size. </p>
			</div>
			<section class="space-large">
				<div class="sub-col-6">
					<div class="block-title">Headings</div>
					<div class="heading-list stagger-fade">
						<h1>Heading 1</h1>
						<h2>Heading 2</h2>
						<h3>Heading 3</h3>
						<h4>Heading 4</h4>
						<h5>Heading 5</h5>
						<h6>Heading 6</h6>
					</div>
				</div>
				<div class="sub-col-6 para-examples">
					<div class="block-title">Pararaph Tags</div>
					<p class="lead">This is a lead paragraph</p>
					<p><strong>This is a strong paragraph</strong></p>
					<p>This is a normal paragraph</p>
					<p><em>This is a em/italic paragraph</em></p>
					<a href="#">This is an anchor tag</a>
					<div class="space-med">
						<div class="block-title">Codeblock</div>
					</div>
					<pre class="codeblock">
					<span class="comment">// this is a comment</span>
.codeblock {
	border: 1px solid #333;
	padding: 0.5em;
	text-align: center;
}</pre>
					<div class="space-med">
						<div class="block-title">Inline-code</div>
					</div>
					<code>.code { padding: 0.5em; }</code>
				</div>
			</section>
			<section class="space-med">
				<div class="sub-grid list stagger-fade">
					<div class="sub-col-4">
						<div class="block-title">Unordered List</div>
						<ul>
							<li>Dolore non nisi quis sit.</li>
							<li>Mollit enim.</li>
							<li>Lorem ipsum nulla duis incididunt.</li>
						</ul>
					</div>
					<div class="sub-col-4">
						<div class="block-title">Ordered List</div>
						<ol>
							<li>In amet esse nulla.</li>
							<li>Excepteur dolore.</li>
							<li>Et cupidatat dolor.</li>
						</ol>
					</div>
					<div class="sub-col-4">
						<div class="block-title">Plain List <code>.list--plain</code></div>
						<ul class="list--plain">
							<li>Eu non.</li>
							<li>Aute quis eu.</li>
							<li>Mollit ea ut aliquip amet.</li>
						</ul>
					</div>
				</div>
			</section>
			<section class="space-small clearfix">
				<div class="block-title">Inline List <code>.list--inline</code></div>
				<ul class="list--inline">
					<li>Et velit in.</li>
					<li>Lorem.</li>
					<li>excepteur.</li>
					<li>Pariatur eu.</li>
					<li>reprehenderit.</li>
				</ul>
			</section>
			<section class="space-small">
				<div class="block-title">Block Quote <code>.blockquote</code></div>
				<blockquote class="blockquote ">
					Reprehenderit consequat consectetur consequat laborum reprehenderit officia cillum et laboris sunt
					culpa duis esse velit sit consectetur est cillum mollit ut consequat qui.
					<cite>&mdash; Billy</cite>
				</blockquote>
				<div class="space-small">
					<div class="block-title">Block Quote <code>.quote</code> </div>
					<blockquote class="quote space-small">
						Minim ea officia labore reprehenderit sint enim sunt eu elit adipisicing nisi et ad deserunt
						occaecat proident do occaecat ut in cupidatat ut consectetur in dolor consequat excepteur elit
						magna quis.
						<cite>&mdash; Billy Jr</cite>
					</blockquote>
				</div>
			</section>
		</div>
	</section>
	<section id="grids" class="grid">
		<div class="col-11">
			<div class="section-type">
				<div class="section-headlines">
					<h1 class="section-title">Grid</h1>
					<p class="lead">There are two grids, one in the more traditional vien using floats and a sass
						function based on the number of columns desired. The second grid is done in css-grid to all for
						more flexible and precise control.</p>
				</div>
			</div>
		</div>
	</section>
	<section class="grid">
		<div class="col-11">
			<div class="space-med">
				<section class="block-title">Traditional Grid <code>.grid</code></section>
				<p>This tradition grid is set to a 12 column layout by default. Using <code>.col-#</code> to define the
					width of the column and using <code>.offset-#</code> to push the columnd form the right.</p>
			</div>
		</div>
		<div class="example-grid">
			<div class="col-11">
				<div>col-11</div>
			</div>
			<div class="col-1">
				<div>1</div>
			</div>
			<div class="col-10">
				<div>col-10</div>
			</div>
			<div class="col-2">
				<div>col-2</div>
			</div>
			<div class="col-9">
				<div>col-9</div>
			</div>
			<div class="col-3">
				<div>col-3</div>
			</div>
			<div class="col-8">
				<div>col-8</div>
			</div>
			<div class="col-4">
				<div>col-4</div>
			</div>
			<div class="col-7">
				<div>col-7</div>
			</div>
			<div class="col-5">
				<div>col-5</div>
			</div>
			<div class="col-6">
				<div>col-6</div>
			</div>
			<div class="col-6">
				<div>col-6</div>
			</div>
			<div class="col-5">
				<div>col-5</div>
			</div>
			<div class="col-7">
				<div>col-7</div>
			</div>
			<div class="col-4">
				<div>col-4</div>
			</div>
			<div class="col-8">
				<div>col-8</div>
			</div>
			<div class="col-3">
				<div>col-3</div>
			</div>
			<div class="col-9">
				<div>col-9</div>
			</div>
			<div class="col-2">
				<div>col-2</div>
			</div>
			<div class="col-10">
				<div>col-10</div>
			</div>
			<div class="col-1">
				<div>1</div>
			</div>
			<div class="col-11">
				<div>col-11</div>
			</div>
			<div class="col-12">
				<div>col-12</div>
			</div>
		</div>
	</section>
	<section class="grid">
		<div class="col-11">
			<div class="space-large">
				<section class="block-title">Traditional Grid &ndash; Offest <code>.offset-#</code></section>
				<p>This tradition grid is set to a 12 column layout by default. Using <code>.col-10#</code> to define
					the width of the column and using <code>.offset-#</code> to push the columnd form the right.</p>
			</div>
		</div>
		<div class="example-grid">
			<div class="col-12">
				<div>No Offset</div>
			</div>
			<div class="offset-1 col-11">
				<div>Offset-1</div>
			</div>
			<div class="offset-2 col-10">
				<div>Offset-2</div>
			</div>
			<div class="offset-3 col-9">
				<div>Offset-3</div>
			</div>
			<div class="offset-4 col-8">
				<div>Offset-4</div>
			</div>
			<div class="offset-5 col-7">
				<div>Offset-5</div>
			</div>
			<div class="offset-6 col-6">
				<div>Offset-6</div>
			</div>
			<div class="offset-7 col-5">
				<div>Offset-7</div>
			</div>
			<div class="offset-8 col-4">
				<div>Offset-8</div>
			</div>
			<div class="offset-9 col-3">
				<div>Offset-9</div>
			</div>
			<div class="offset-10 col-2">
				<div>Offset-10</div>
			</div>
			<div class="offset-11 col-1">
				<div>11</div>
			</div>
		</div>
	</section>
	<section class="grid-css">
		<div class="col-1-11">
			<div class="space-med">
				<section class="block-title">Css Grid <code>.grid-css</code></section>
				<p><code>.grid-css</code> allows you to specifically place a column using <code>.col-#-#</code> for the
					start and end line of the column. You can also use <code>.row-#-#</code> to set the height of an
					element, however it seems to work best to use it for all elements, or not at all.</p>
			</div>
		</div>
	</section>
	<section class="grid-css example-grid">
		<div class="col-1-12">
			<div>col-1-12</div>
		</div>
		<div class="col-2-3">
			<div>col-2-3</div>
		</div>
		<div class="col-6-10">
			<div>col-6-10</div>
		</div>
		<div class="col-4-12">
			<div>col-4-12</div>
		</div>
		<div class="col-5-12">
			<div>col-5-12</div>
		</div>
		<div class="col-2-6">
			<div>col-2-6</div>
		</div>
		<div class="col-1-4">
			<div>col-1-4</div>
		</div>
		<div class="col-8-12">
			<div>col-8-12</div>
		</div>
		<div class="col-4-6">
			<div>col-4-6</div>
		</div>
		<div class="col-2-5">
			<div>col-2-5</div>
		</div>
		<div class="col-11-12">
			<div>col-11-12</div>
		</div>
	</section>
	<section id="forms" class="grid">
		<div class="space-large">
			<div class="section-headlines">
				<h1 class="section-title">Form</h1>
				<p class="lead">Form styles and the real money makers: buttons.</p>
			</div>
		</div>
		<div class="col-12">
			<div class="space-med">
				<div class="block-title">Form</div>
			</div>
			<form action="">
				<div class="col-4 input-wrap"><input type="text" required><label class="label">This is a label</label>
				</div>
				<div class="col-4 input-wrap"><input type="text" required><label class="label">This is a label</label>
				</div>
				<div class="col-4 input-wrap">
					<select name="" id="">
						<option value="">I am an option</option>
						<option value="">I am an option</option>
						<option value="">I am an option</option>
					</select>
					<label class="label">This is a label</label>
				</div>
				<div class="col-12">
					<div class="input-wrap">
						<textarea name="" id="" required cols="30" rows="10"></textarea>
						<label class="label">Text Area</label>
					</div>
				</div>
			</form>
			<section class="space-med">
				<div class="block-title">Primary Buttons <code>.button</code></div>
				<p>
					<a href="#" class="button button-large">.button-large</a>
					<a href="#" class="button">.button</a>
					<a href="#" class="button button-ghost">.button-ghost</a>
					<a href="#" class="button button-small">.button-small</a>
				</p>
				<p>
					<input type="button" class="button" name="" value="input[type=‘button’]">
					<input type="submit" class="button" name="" value="input[type=‘submit’]">
					<button class="button">Button</button>
				</p>
				<p>
					<a href="#" class="button button-full">.button-full</a>
				</p>
			</section>
			<section class="space-med">
				<div class="block-title">Secondary Buttons <code>.button-secondary</code></div>
				<p>
					<a href="#" class="button button-large button-secondary">.button-large</a>
					<a href="#" class="button button-secondary">.button</a>
					<a href="#" class="button button-ghost button-secondary">.button-ghost</a>
					<a href="#" class="button button-small button-secondary">.button-small</a>
				</p>
				<p>
					<input type="button" class="button button-secondary" name="" value="input[type=‘button’]">
					<input type="submit" class="button button-secondary" value="input[type=‘submit’]">
					<button class="button button-secondary">Button</button>
				</p>
				<p>
					<a href="#" class="button button-full button-secondary">.button-full</a>
				</p>
			</section>
		</div>
	</section>
	<section id="tables" class="grid">
		<div class="col-12">
			<div class="space-large">
				<h1 class="section-title">Tables</h1>
				<p class="lead">Cause we all have to display some data every once in awhile.</p>
			</div>
			<div class="block-title">Primary Table</div>
			<table class="table">
				<thead class="table-head">
					<tr>
						<th>Column 1</th>
						<th>Column 2</th>
						<th>Column 3</th>
						<th>Column 4</th>
						<th>Column 5</th>
					</tr>
				</thead>
				<tbody class=table-body>
					<tr>
						<th data-title="Column 1">Body head</th>
						<td data-title="Column 2">Data</td>
						<td data-title="Column 3">Data</td>
						<td data-title="Column">Data</td>
						<td data-title="Column">Data</td>
					</tr>
					<tr>
						<th data-title="Column 1">Body head</th>
						<td data-title="Column 2">Data</td>
						<td data-title="Column 3">Data</td>
						<td data-title="Column 4">Data</td>
						<td data-title="Column 5">Data</td>
					</tr>
					<tr>
						<th data-title="Column 1">Body head</th>
						<td data-title="Column 2">Data</td>
						<td data-title="Column 3">Data</td>
						<td data-title="Column 4">Data</td>
						<td data-title="Column 5">Data</td>
					</tr>
					<tr>
						<th data-title="Column 1">Body head</th>
						<td data-title="Column 2">Data</td>
						<td data-title="Column 3">Data</td>
						<td data-title="Column 4">Data</td>
						<td data-title="Column 5">Data</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<div class="footer-wrap">
		<?php include 'includes/global/footer/index.php';?>
	</div>
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="/js/global.js"></script>
</body>

</html>
<!doctype html>