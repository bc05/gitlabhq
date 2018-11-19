Vue.use(Vuex);

    const diffFile = diffDiscussionMock.diff_file;
      diffFile: { ...diffFile },
        props.discussionPath = 'link://to/discussion';
          submodule_link: 'link://to/submodule',
          submodule_tree_url: 'some://tree/url',
      it('returns the discussionPath for files', () => {
        expect(vm.titleLink).toBe(props.discussionPath);
        expect(vm.titleLink).toBe(props.diffFile.submodule_tree_url);
          submodule_tree_url: null,
        expect(vm.titleLink).toBe(props.diffFile.submodule_link);
      });

      it('sets the correct path to the discussion', () => {
        props.discussionPath = 'link://to/discussion';
        vm = mountComponentWithStore(Component, { props, store });
        const href = vm.$el.querySelector('.js-title-wrapper').getAttribute('href');

        expect(href).toBe(vm.discussionPath);
          file_path: 'path/to/file',
        expect(vm.filePath).toBe(props.diffFile.file_path);
          `${props.diffFile.file_path} @ ${props.diffFile.blob.id.substr(0, 8)}`,
        props.diffFile.file_hash = 'some hash';
        props.diffFile.file_hash = null;
          stored_externally: true,
          external_storage: 'lfs',
        props.diffFile.stored_externally = false;
        props.diffFile.external_storage = 'not lfs';
        props.diffFile.content_sha = dummySha;
        props.diffFile.diff_refs.base_sha = dummySha;

        props.diffFile.renamed_file = false;
        expect(filePaths()[0]).toHaveText(props.diffFile.file_path);
        props.diffFile.renamed_file = false;
        props.diffFile.deleted_file = true;
        expect(filePaths()[0]).toHaveText(`${props.diffFile.file_path} deleted`);
        props.diffFile.renamed_file = true;
        expect(filePaths()[0]).toHaveText(props.diffFile.old_path);
        expect(filePaths()[1]).toHaveText(props.diffFile.new_path);

      expect(button.dataset.clipboardText).toBe(
        '{"text":"files/ruby/popen.rb","gfm":"`files/ruby/popen.rb`"}',
      );
        props.diffFile.mode_changed = true;

        expect(fileMode).toContainText(props.diffFile.a_mode);
        expect(fileMode).toContainText(props.diffFile.b_mode);
        props.diffFile.mode_changed = false;

          stored_externally: true,
          external_storage: 'lfs',
        props.diffFile.stored_externally = false;
        props.diffFile.edit_path = '/';
        props.diffFile.deleted_file = true;
        props.diffFile.edit_path = '/';
        props.diffFile.edit_path = '';
          props.diffFile.external_url = url;
          props.diffFile.formatted_external_url = title;
          props.diffFile.external_url = '';
          props.diffFile.formattedExternal_url = title;
          readable_text: true,
        propsCopy.diffFile.deleted_file = true;
            readable_text: true,
          propsCopy.diffFile.deleted_file = true;