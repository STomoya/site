from jinja2 import Environment, FileSystemLoader

base_folder = './templates'
build_folder = './docs/'

pages = [
    'index.html',
    'news.html',
    'projects.html'
]

env = Environment(loader=FileSystemLoader(base_folder, encoding='utf-8'))

for page in pages:
    print('building {}'.format(page))
    template = env.get_template(page)
    rendered = template.render()
    with open(build_folder+page, 'w', encoding='utf-8') as fout:
        fout.write(str(rendered))

print('build complete')
